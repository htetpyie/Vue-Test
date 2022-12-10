const app = Vue.createApp({
    // template : "<h2>Hello</h2>",
    data(){
        return{            
            title: "View3",
            author: "HtetPyie",
            age: 20,
            showBook: true,
        }
    },
    mehtods:{
        IncreaseAge(){
            console.log("in method")
            this.age++;
        }
    }
});
app.mount("#app");