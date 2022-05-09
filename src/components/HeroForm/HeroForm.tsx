import React from 'react';
import { useDispatch, useSelector, useStore} from 'react-redux'
import {useForm} from 'react-hook-form';
import {Button} from '@mui/material';
import { chooseName, chooseBackstory, chooseFirst, chooseLast, choosePowers, chooseWeaknesses, chooseFoes, chooseSaves, chooseSpouse  } from '../../redux/slices/rootSlice';
import {Input} from '../sharedComponents';
import { serverCalls } from '../../api';
import { useGetData } from '../../custom-hooks';


interface HeroFormProps{
    id?:string;
    data?:{};
}

interface HeroState{
    name:string,
    backstory:string,
    first_name:string,
    last_name:string,
    powers:string,
    weaknesses:string,
    foes:string,
    lives_saved:string,
    spouse:string

}

export const HeroForm = (props:HeroFormProps) => {
    const dispatch = useDispatch();
    let {heroData, getData} = useGetData();
    const store = useStore();

    const name = useSelector<HeroState>(state => state.name)
    const backstory = useSelector<HeroState>(state => state.backstory)
    const first_name = useSelector<HeroState>(state => state.first_name)
    const last_name = useSelector<HeroState>(state => state.last_name)
    const powers = useSelector<HeroState>(state => state.powers)
    const weaknesses = useSelector<HeroState>(state => state.weaknesses)
    const foes = useSelector<HeroState>(state => state.foes)
    const lives_saved = useSelector<HeroState>(state => state.lives_saved)
    const spouse = useSelector<HeroState>(state => state.spouse)

    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event:any) => {
        console.log(props.id)

        if( props.id!){
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data.name} \nID: ${props.id}`)
            window.location.reload();
            event.target.reset()
        } else {
            dispatch(chooseName(data.name))
            dispatch(chooseBackstory(data.backstory))
            dispatch(chooseFirst(data.first_name))
            dispatch(chooseLast(data.last_name))
            dispatch(choosePowers(data.powers))
            dispatch(chooseWeaknesses(data.weaknesses))
            dispatch(chooseFoes(data.foes))
            dispatch(chooseSaves(data.lives_saved))
            dispatch(chooseSpouse(data.spouse))

            await serverCalls.create(store.getState())
            window.location.reload();
            event.target.reset();
        }
    }

    return(
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Hero Name</label>
                    <Input {...register('name')} name='name' placeholder='Name' />
                </div>
                <div>
                    <label htmlFor="backstory">Backstory</label>
                    <Input {...register('backstory')} name="backstory" placeholder="Backstory"/>
                </div>
                <div>
                    <label htmlFor="first_name">First Name</label>
                    <Input {...register('first_name')} name="first_name" placeholder="First Name"/>
                </div>
                <div>
                    <label htmlFor="last_name">Last Name</label>
                    <Input {...register('last_name')} name="last_name" placeholder="Last Name"/>
                </div>
                <div>
                    <label htmlFor="powers">Powers</label>
                    <Input {...register('powers')} name="powers" placeholder="Powers"/>
                </div>
                <div>
                    <label htmlFor="weaknesses">Weaknesses</label>
                    <Input {...register('weaknesses')} name="weaknesses" placeholder="Weaknesses"/>
                </div>
                <div>
                    <label htmlFor="foes">Foes</label>
                    <Input {...register('foes')} name="foes" placeholder="Foes"/>
                </div>
                <div>
                    <label htmlFor="lives_saved">Lives Saved</label>
                    <Input {...register('lives_saved')} name="lives_saved" placeholder="Lives Saved"/>
                </div>
                <div>
                    <label htmlFor="spouse">Spouse</label>
                    <Input {...register('spouse')} name="spouse" placeholder="Spouse"/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}