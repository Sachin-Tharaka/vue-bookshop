const app = Vue.createApp({
data(){
    return{
        showBooks: true,
        books:[
            {name: 'Deep Drive',author: 'jane',isFav: true},
            {name: 'Infinity',author: 'mickeal',isFav: false},
            {name: 'Web app pen testing',author: 'lenord',isFav: true},
        ]
}
},
methods:{
    handleChange(){
    this.showBooks = !this.showBooks
    },
    bookSlider(book){
    book.isFav = !book.isFav
    }

},


})



app.mount("#app")
