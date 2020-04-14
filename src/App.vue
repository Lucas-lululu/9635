<template>
  <div id="app">
    <vHead @classId="_changeList_" />
    <vList :list="list" />
  </div>
</template>

<script>
import vHead from "@/components/Header";
import vList from "@/components/List";

export default {
  name: "App",
  data() {
    return {
      list: [],
      one: [
        {
          id: 1,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 2,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 3,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 4,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 5,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 6,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 7,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 8,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 9,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 10,
          name: "小兔几",
          like: 1111111
        },
        {
          id: 11,
          name: "小兔几",
          like: 1111111
        }
      ],
      two: [
        {
          id: 1,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 2,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 3,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 4,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 5,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 6,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 7,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 8,
          name: '小兔几',
          like:2222222
        },
        {
          id: 9,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 10,
          name: '小兔几',
          like: 2222222
        },
        {
          id: 11,
          name: '小兔几',
          like: 2222222
        }
      ],
      three: [
        {
          id: 1,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 2,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 3,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 4,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 5,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 6,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 7,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 8,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 9,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 10,
          name: '小兔几',
          like: 3333333
        },
        {
          id: 11,
          name: '小兔几',
          like: 3333333
        }
      ]
    };
  },
  created() {
    this.list = this.one
  },
  methods: {
    _changeList_(v) {
      if (v == 1) {
        this.list = this.one
      } else if (v == 2) {
        this.list = this.two
      } else {
        this.list = this.three
      }
    }
  },
  components: {
    vHead,
    vList
  }
};
</script>

<style lang="less">
#app {
  max-width: 750px;
  margin: 0 auto;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
* {
  margin: 0;
  padding: 0;
}
</style>
