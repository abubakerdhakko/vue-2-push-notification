<template>
<div class="">
    <Tutorial/>
  <h1@click="authenticate">firebase</h1>
</div>
</template>

<script>
import { getAuth,signInAnonymously } from 'firebase/auth' 
import { getMessaging,onMessage, getToken } from 'firebase/messaging' 
import { messaging } from '@/plugins/firebase'
// 75.8k (gzipped: 22.3k)
export default {
  name: "IndexPage",
  mounted(){
    const messaging = getMessaging()
    onMessaging(messaging,(payload)=>{
      console.log('Mesaaging on client:',payload)
    })
  },
  methods: {
    async authenticate() {
      await signInAnonymously(getAuth())
      this.activate()
    },

    async activate(){
      const token = await getToken(messaging,{
        vapidKey: 'BDnJ2e1DuG4qSOviXI4s-fe1Al00zvI7Mxj-nwBlKkWXpOC392ucC4QzCWc9YWOTM05UECha_C6dL2Rp6qhGfC4'
      })

      if(token){
        console.log('token', token)
      }
    }
  },
};
</script>
