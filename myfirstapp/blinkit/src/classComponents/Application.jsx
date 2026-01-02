class Application extends React.Component{
    constructor(){
        super()
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        console.log("side effects")
        fetch('http://dummyjson.com/recipes')
        .then(res=>res.json())
        .then((response)=>{
            this.setState({products:response.recipes})
        })
    }

    render(){
        return(
            <>
            {this.state.products.length>0?<>
            {this.state.products.map(each=><img src={each.image}></img>)}
            </>:"no data"}
            </>
        )
    }
}