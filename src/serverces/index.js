import axios from 'axios'
import connectConfig from './connectConfig'
import store from '../store/store'
import {constart,success,error} from '../store/actions/connectAction'


const instance=axios.create(
  connectConfig.baseConfig
)

instance.interceptors.request.use((config)=>{
  //TODO LOADING START
  console.log(constart(),'interceptors 13')
  store.dispatch({
    type:'CONNECT_START',
    payload: {
      isLoading: true
    }
  })
  return config
},(err)=>{
  store.dispatch(error(err.message))
  console.log(err)
})
instance.interceptors.response.use((response)=>{
  //TODO LOADING END
  console.log(success(),'interceptors 22')
  store.dispatch(success())
  return response
},(err)=>{
  store.dispatch(error(err.message))
  console.log(err)
})

export default instance