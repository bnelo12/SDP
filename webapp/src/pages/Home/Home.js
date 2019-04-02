import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { IonApp, IonSplitPane, IonRouterOutlet } from '@ionic/react';

import Menu from '../../components/Menu';
import Cart from '../Cart';
import Browse from '../Browse';
import Return from '../Return';
import Logout from '../Logout';

import Queue from '../../components/Queue';
import ReturnSteps from '../../components/ReturnSteps';


class Home extends Component {

    componentDidMount() {
        this.props.browseItemsDispatch.subscribeToBrowseItemsData();
        this.props.cartDispatch.subscribeToCartData(this.props.user.userRecord.email);
        this.props.queueDispatch.subscribeToQueueData();
        this.props.itemsDispatch.subscribeToItemsData();
        this.props.orderDispatch.subscribeToOrdersData(this.props.user.userRecord.email);
    }

    componentWillUnmount() {
        this.props.browseItemsDispatch.unsubscribeToBrowseItemsData();
        this.props.queueDispatch.unsubscribeFromQueueData(this.props.queue.dataReference);
        this.props.itemsDispatch.unsubscribeFromItemsData(this.props.items.dataReference);
        this.props.orderDispatch.unsubscribeFromOrdersData(this.props.order.dataReference);        
    }

    render() {
        const {queueDispatch, orderDispatch} = this.props;
        return (
            <IonApp>
                <IonSplitPane contentId='main'>
                    <Menu/>
                    <div id='main' className='ion-page'>
                        <Route exact path="/home" render={() => <Redirect to="/home/browse"/>}/>
                        <IonRouterOutlet>
                            <Route path="/home/browse" component={ Browse } exact={true}/>
                            <Route path="/home/return" component={ Return } exact={true}/>
                            <Route path="/home/cart" component={ Cart } exact={true}/>
                            <Route path="/home/logout" component={ Logout } exact={true}/>
                        </IonRouterOutlet>
                    </div>
                </IonSplitPane>
                <Queue
                    queue={ this.props.queue }
                    email={ this.props.user.userRecord.email }
                    items={ this.props.items.items }
                    cartItems={ this.props.cart.items }
                    onCancelOrder={ queueDispatch.cancelOrder }
                    submitOrder= { orderDispatch.submitOrder }
                    isReturn={ this.props.queue.isReturn }
                    beginReturn={ this.props.returnItemsDispatch.beginReturn }
                />
                {this.props.returnItems.returnActive ? (
                <ReturnSteps
                    browseItems={this.props.browseItems}
                    orders={this.props.order}
                    returnItems={this.props.returnItems}
                    incrementStep={this.props.returnItemsDispatch.incrementStep}
                    submitReturn={this.props.returnItemsDispatch.submitReturn}
                    email={this.props.user.userRecord.email}
                    items={this.props.items.items}
                    finishReturn={this.props.returnItemsDispatch.finishReturn}
                    toastManager={this.props.toastManager}
                />) : (null)}
            </IonApp>
        );
    }
}

export default Home;