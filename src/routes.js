import Header from './components/Header.vue';
import FAQ from './components/FAQ.vue';
//import Contact from './components/Contact.vue';
import InputForm from './components/InputForm.vue';
import Houses from './components/Houses.vue';
import Details from './components/Details.vue';


export default[
    { path:'/', component: Header},
    { path:'/faq', component: FAQ},
    { path:'/sell', component: InputForm},
    { path: '/houses', component: Houses},
    { path: './details', name: 'Details', component: Details, props: true}
 
]