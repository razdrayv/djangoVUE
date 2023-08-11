import{defineStore} from 'pinia'
import { ref, computed } from 'vue'
export const usePostStore = definestore('postStore',{
    state: () => ({
        pages:[], 
    })
,
    actions:{
        async page_data_api(){
            const data = await fetch('http://127.0.0.1:8000/api/v1/')
            const data2 = await data.json()
        }
}})