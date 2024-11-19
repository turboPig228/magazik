  import React from 'react'
  import './index.css'
  import Header from './Components/Header'
  import Footer from './Components/Footer'
  import Items from './Components/Items'
  import Categories from './Components/Categories'

  class App extends React.Component  {
    constructor(props) { 
      super(props)
      this.state = {
        currentItems: [],
        orders: [],
        items: [

          {
            id: 1,
            title:'Batman-TTG',
            image:'./img/batmantt.png',
            desc: "",
            category:"Interactivemovie",
            price:"",
            count: "0"
          },
          {
            id: 2,
            title:'TheWalkingDead1',
            image:'./img/twd1.png',
            desc: "",
            category:"Interactivemovie",
            price:"",
            count: "0"
          },
          {
            id: 3,
            title:'TheWalkingDead2',
            image:'./img/twd2.png',
            desc: "",
            category:"Interactivemovie",
            price:"",
            count: "0"
          },
          {
            id: 4,
            title:'TheWalkingDead3',
            image:'./img/twd3.png',
            desc: "",
            category:"Interactivemovie",
            price:"",
            count: "0"
          },
          {
            id: 5,
            title:'TheWalkingDead4',
            image:'./img/twd4.png',
            desc: "",
            category:"Interactivemovie",
            price:"",
            count: "0"
          },
          {
            id: 6,
            title:'Detroid.Become a human',
            image:'./img/detroid.png',
            desc: "",
            category:"Interactivemovie",
            price:"",
            count: "0"
          },
          {
            id: 7,
            title:'Batman.Archam Knight',
            image:'./img/batmanarcham.png',
            desc: "",
            category:"Action",
            price:"",
            count: "0"
          },
          {
            id: 8,
            title:'GTA5',
            image:'./img/gta5.png',
            desc: "",
            category:"Action",
            price:"",
            count: "0"
          },
          {
            id: 9,
            title:'Red Dead Redemption II',
            image:'./img/rdr2.png',
            desc: "",
            category:"Action",
            price:"",
            count: "0"
          },
          {
            id: 10,
            title:'Mafia II',
            image:'./img/mafia2.png',
            desc: "",
            category:"Action",
            price:"",
            count: "0"
          },
          {
            id: 11,
            title:'The Wolf Among Us',
            image:'./img/bigbadwolf.png',
            desc: "",
            category:"Interactivemovie",
            price:"",
            count: "0"
          },
          {
            id: 12,
            title:'Cyberpunk2077',
            image:'./img/cyberpunk.png',
            desc: "",
            category:"RPG",
            price:"",
            count: "0"
          },
          {
            id: 13,
            title:'KindomComeDelivered',
            image:'./img/cindom.png',
            desc: "",
            category:"RPG",
            price:"",
            count: "0"
          },
          {
            id: 14,
            title:'TheWitcher.Wild Hunt',
            image:'./img/thewitcher.png',
            desc: "",
            category:"RPG",
            price:"",
            count: "0"
          },
          {
            id: 15,
            title:'DOOM. Eternal',
            image:'./img/doom.png',
            desc: "",
            category:"Shooter",
            price:"",
            count: "0"
          },
          {
            id: 16,
            title:'Far Cry 5',
            image:'./img/farcry5.png',
            desc: "",
            category:"Shooter",
            price:"",
            count: "0"
          },
          {
            id: 17,
            title:'METRO. Exodus',
            image:'./img/metro3.png',
            desc: "",
            category:"Shooter",
            price:"",
            count: "0"
          },
          {
            id: 18,
            title:'ResidentEvil4',
            image:'./img/residentevil4.png',
            desc: "",
            category:"Shooter",
            price:"",
            count: "0"
          },
          {
            id: 19,
            title:'ResidentEvil.Village',
            image:'./img/residenevil8.png',
            desc: "",
            category:"Shooter",
            price:"",
            count: "0"
          },
          {
            id: 20,
            title:'MortalCombar11',
            image:'./img/mk11.png',
            desc: "",
            category:"Fighting",
            price:"",
            count: "0"
          },
     
      ]
    }
    this.state.currentItems=this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.incrementCount = this.incrementCount.bind(this)
  }
  render(props)
   {
        return (
      <div className='Wrapper'>
        <Header orders = {this.state.orders} onDelete = {this.deleteOrder} onCount = {this.incrementCount}/>
        <Categories chooseCategory = {this.chooseCategory}/>
        <Items items = {this.state.currentItems} onAdd = {this.addToOrder}/>

        <Footer />

      </div>
    )
  }

  ////////////////////////////////

  incrementCount = (id) => {
    this.setState((prevState) => ({
        items: prevState.orders.map(item => 
            item.id === id ? { ...item, count: item.count + 1 } : item
        )
    }));
}


  ///////////////////////////////

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el =>
      el.id !== id
    )})
  }
  addToOrder(item){
    let arrayId = false
    this.state.orders.map(el => {
      if(el.id === item.id) {
        arrayId = True
      }
    })
    this.setState({orders: [...this.state.orders,item]})
  }
  chooseCategory(category) {
    if (category ==='all') {
      this.setState({currentItems:this.state.items})
      return
    }
    this.setState({currentItems:this.state.items.filter(el => el.category === category)})
  }
  componentDidMount() {
    const orders = JSON.parse(localStorage.getItem('orders'));
    if (orders) {
      this.setState({ orders });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.orders !== this.state.orders) {
      localStorage.setItem('orders', JSON.stringify(this.state.orders));
    }
  }
}
  
    export default App

    