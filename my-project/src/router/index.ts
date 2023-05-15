import { createRouter, createWebHistory } from 'vue-router';
import ToDoListShow from '../views/ToDoListShow.vue';
import ToDoListCreate from '../views/ToDoListCreate.vue';

const routes = [
  {
    path: '/',
    name: 'ToDoListShow',
    component: ToDoListShow
  },
  {
    path: '/create',
    name: 'ToDoListCreate',
    component: ToDoListCreate
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;

