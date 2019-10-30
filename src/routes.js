import Header from './components/Header.vue';
import FAQ from './components/FAQ.vue';
//import Contact from './components/Contact.vue';
import InputForm from './components/InputForm.vue';

export default[
    { path:'/', component: Header},
    { path:'/faq', component: FAQ},
    { path:'/sell', component: InputForm},
]