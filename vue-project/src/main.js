import { createApp } from 'vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap'; 

import FoodItem from './components/FoodItem.vue'
import FoodItem2 from './components/FoodItem2.vue'
import FoodItem3 from './components/FoodItem3.vue'
import PersonalProfile from './components/PersonalProfile.vue'

const app = createApp(App)

app.component('food-item', FoodItem)
app.component('food-item2', FoodItem2)
app.component('food-item3', FoodItem3)
app.component('personal-profile', PersonalProfile)

app.mount('#app')
