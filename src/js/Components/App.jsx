import React,{Component} from 'react'
import Data from './Data';
import Nav from './Nav/Nav';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SubFooter from './SubFooter/SubFooter';
import NewsLetter from './NewsLetter/NewsLetter';
import Products from './Products/Products';
import  Prod  from './Prod';

class App extends Component {

    state={
        data:Data,
        data1:Prod
    }

    render(){
        console.log(this.state.data)
        return(
            <div>
           <Nav nav={this.state.data.nav[0]}/>
           <Header head={this.state.data.header} />
           < Products prod={this.state.data1.products[0]} cat={this.state.data.categories}  pr={this.state.data.pricesRange}/>
           <NewsLetter news={this.state.data.Newsletter} />
           <Footer foot={this.state.data.footer} />
           <SubFooter sub={this.state.data.footer_sec} />

        </div>
        )
       
    }
}
export default App;