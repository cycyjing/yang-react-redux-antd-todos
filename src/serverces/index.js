import axios from 'axios'
import connectConfig from './connectConfig'
import store from '../store/store'
import {constart,success,error} from '../store/actions/connectAction'


const instance=axios.create(
  connectConfig.baseConfig
)

instance.interceptors.request.use((config)=>{
  //TODO LOADING START
 
  store.dispatch({
    type:'CONNECT_START',
    payload: {
      isLoading: true
    }
  })
  return config
},(err)=>{
  store.dispatch(error(err.message))
  
})
instance.interceptors.response.use((response)=>{
  //TODO LOADING END
 
  store.dispatch(success())
  return response
},(err)=>{
  store.dispatch(error(err.message))
 
})

export default instance