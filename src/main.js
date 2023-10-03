import { createApp } from 'vue';
import { verifyToken } from './tokenUtils.js';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Login from './views/Login.vue';
import Logout from './views/Logout.vue';
import Signup from './views/Signup.vue';
import Book_a_room from './views/Book_a_room.vue';
import All_Reservations from './views/All_Reservations.vue';
// import UserPage from './views/UserPage.vue';
// import ManagerPage from './views/ManagerPage.vue';
import myAccount from './views/myAccount.vue';
// import PersonalReservationsPage from './views/PersonalReservationsPage.vue';
// import LoginChecker from './components/LoginCheckerComponent.vue';

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout,
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
    },
    {
        path: '/book_a_room',
        name: 'Book_a_room',
        component: Book_a_room,
    },
    {
        path: '/all_reservations',
        name: 'All_Reservations',
        component: All_Reservations,
    },
    // {
    //     path: '/mainUserPage',
    //     name: 'UserPage',
    //     component: UserPage,
    // },
    // {
    //     path: '/mainManagerPage',
    //     name: 'ManagerPage',
    //     component: ManagerPage,
    // },
    // {
    //     path: '/personalReservations/:id',
    //     name: 'PersonalReservationsPage',
    //     component: PersonalReservationsPage,
    // },
    {
        path: '/account',
        name: 'myAccount',
        component: myAccount,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

router.beforeEach(async (to, from, next) => {
    console.log("--------------------- ENTERING the check for the token");

    // Skip token verification and allow the navigation to proceed to HOME
    // console.log("Verificam home: " + to.name);
    // if (to.name === 'Home') {
        // next();
        // return;
    // }

    console.log("Verificam token: " + to.name);
    const isTokenValid = await verifyToken();
    console.log("isTokenValid: " + isTokenValid);

    if (!isTokenValid && to.name !== "Login" && to.name !== "Signup" && to.name !== "Home") {
        console.log("Suntem in to.name nu e LOGIN && to.name nu e SIGNUP SI NICI HOME, unde tokenu e invalid: " + to.name);
        // Daca token-ul nu este valid -> Redirect pe login
        next({ path: '/login', replace: true });
        return;
    } if (isTokenValid && to.name === "Login") {
        console.log("Suntem in to.name e LOGIN && unde tokenu e valid: " + to.name);
        // If a token exists and the user is trying to navigate to the login page, redirect to another page
        next({ path: '/', replace: true });
        window.history.replaceState({}, '', '/');
        return;
    } else if (isTokenValid && to.name === "Signup") {
        console.log("Suntem in to.name e Signup && unde tokenu e valid: " + to.name);
        // If a token exists and the user is trying to navigate to the login page, redirect to another page
        next({ path: '/', replace: true });
        window.history.replaceState({}, '', '/');
        return;
    } else {
        next();
    }
});


// async function verifyToken() {
//     try {
//         const response = await fetch('http://localhost:3000/protected', {
//             method: 'GET',
//             headers: {
//                 'Authorization': `${localStorage.getItem('token')}`
//             }
//         });

//         if (response.ok) {
//             const data = await response.json();
//             console.log("data: " + data);
//             localStorage.setItem('id', data.userId);
//             localStorage.setItem('userRole', data.userRole);
//             localStorage.setItem('email', data.email);
//             localStorage.setItem('first_name', data.first_name);
//             localStorage.setItem('last_name', data.last_name);

//             return true;
//         } else {
//             localStorage.removeItem('token');
//             localStorage.removeItem("id");
//             localStorage.removeItem("userRole");
//             localStorage.removeItem("email");
//             localStorage.removeItem("first_name");
//             localStorage.removeItem("last_name");

//             // console.error('An error occurred while fetching protected data:', response);
//             return false;
//         }
//     } catch (error) {
//         localStorage.removeItem('token');
//         localStorage.removeItem("id");
//         localStorage.removeItem("userRole");
//         localStorage.removeItem("email");
//         localStorage.removeItem("first_name");
//         localStorage.removeItem("last_name");

//         console.error('An error occurred while trying to validate the token:', error);
//         return false;
//     }
// }

createApp(App).use(router).mount('#app');