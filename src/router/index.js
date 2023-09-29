import {createRouter, createWebHistory} from 'vue-router';
import HomePage from '../components/Homepage.vue';
import GalleryPage from '../components/GalleryPage.vue';
import NewsPage from '../components/NewsPage.vue'
const router=createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        
        component:HomePage, 
    },
   {
        path: '/gallery',
        
        component:GalleryPage, 
    },
     {
        path: '/newspage',
        
        component:NewsPage, 
    },
   
  
  
]

});

export default router;