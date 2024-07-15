<template>
  <Bar />
  <Header />
  <RouterView />
</template>

<script>
import Header from "@/components/layout/Header";
import Bar from "@/components/layout/Topbar";
export default {
  name: 'App',
  components: {
    Bar,
    Header
  }
}
</script>


<style>
</style>
