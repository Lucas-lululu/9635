<template>
  <div class="test">
    <input type="text" v-model="input">
    <button @click="_goSend_">发送</button>
  </div>
</template>

<script>
  export default {
    name : 'test',
    data() {
      return {
        wsuri: 'ws://192.168.2.40:3000/',
        input: '',
        actions: {"data":"12345"},
        websock: null
      }
    },
    created() {
      this.initWebSocket();
    },
    destroyed() {
      this.websock.onclose() //离开路由之后断开websocket连接
    },
    methods: {
      _goSend_() {
        this.websock.send(this.input)
      },
      initWebSocket(){ //初始化weosocket
        this.websock = new WebSocket(this.wsuri);
        this.websock.onmessage = this.websocketonmessage;
        this.websock.onerror = this.websocketonerror;
        this.websock.onclose = this.websocketclose;
        this.websock.onopen = this.websocketonopen;
      },
      websocketonopen(){ //连接建立之后执行send方法发送数据
        console.log('先执行open函数')
        this.websocketsend(JSON.stringify(this.actions));
      },
      websocketonerror(){ //连接建立失败重连
        this.initWebSocket();
      },
      websocketonmessage(e){ //数据接收
        console.log(e)
        console.log(`然后接受函数${e.data}`)
        const redata = JSON.parse(e.data);
      },
      websocketsend(Data){ //数据发送
        console.log(`Data的值为${Data}`)
        this.websock.send(Data);
      },
      websocketclose(e){  //关闭
        console.log('断开连接---',e);
      },
    }
  }
</script>
<style lang='less'>
 
</style>