import Home from './components/Home.vue';
import FAQ from './components/FAQ.vue';
import Maps from './components/Maps.vue';
import InputForm from './components/InputForm.vue';
import Houses from './components/Houses.vue';
import Details from './components/Details.vue';

export default[
    { path:'/', component: Home},
    { path:'/faq', component: FAQ},
    { path:'/sell', component: InputForm},
    { path: '/Maps', component: Maps},
    { path: '/houses', name: 'Houses', component: Houses, alias: "/houses-city"},
    { path: '/details', name: 'Details', component: Details} 
]