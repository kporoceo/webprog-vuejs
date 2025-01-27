<template>
    <ul>
      <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
    </ul>
  <h1>Food</h1>
  <food-item/>
  <food-item2/> 
  <food-item3/> <br>
  <personal-profile> </personal-profile>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from './lib/supabaseClient'

  const countries = ref([])

  async function getCountries() {
    const { data } = await supabase.from('countries').select()
    countries.value = data
  }

  onMounted(() => {
    getCountries()
  })
  </script>

<style>
.apples {
    border: dashed black 1px;
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }

.mangoes {
    border: dashed black 1px;
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightyellow;
  }

.cherries {
    border: dashed black 1px;
    display: inline-block;
    width: 120px;
    margin: 10px;
    padding: 10px;
    background-color: lightcoral;
  }

#app > div:hover {
  cursor: pointer;
}

</style> 