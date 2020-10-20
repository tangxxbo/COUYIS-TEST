import React from 'react';
import PropTypes from 'prop-types';
class Person extends React.Component{
    //确认对象的属性值是字符串还是数字类型等
    // static PropTypes = {
    //     name:PropTypes.string,
    //     age:PropTypes.number,
    //     sex:PropTypes.number
    // }
    state = {
        isHeight:false,
        isSex:0,
        result:0,
        baseInfo:[]
    }

    clickHandler= () => {
        let {isHeight} = this.state;
        isHeight = !isHeight;
        this.setState({isHeight});
    }
    //第二种
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         isHeight:false,
    //         isSex:0,
    //         baseInfo:[]
    //     }
    //     this.clickHandler = this.clickHandler.bind(this);
    // }
    
    // clickHandler(){
    //     // console.log(this.state);
    //     let {isHeight} = this.state;
    //     isHeight = !isHeight;
    //     //状态不可以直接更新，意思是不能直接用结构赋值的方式给值。例子如下:
    //     //this.state.isHeight = true;
    //     //当state里面某个属性的属性值是对象类型，如baseInfo，该属性不可直接修改，例子如下:
    //     //let {baseInfo} = this.state
    //     //应该这样写
    //     //let baseInfo = [...this.state.baseInfo] 
    //     this.setState({isHeight});
    // }
    
    
    sum1 = (a,b,c)=>{
        // let {reuslt} = this.state;
        // reuslt = a+b+c;
        return a+b+c;
        // return reuslt;
    }
    
    
    sums = (...data)=>{
        // let result = 0;
        //第一种foreach循环(foreach不带返回值的)
        // data.forEach((item)=>{
        //     result +=item;
        // })
        // return result;
        //第二种reduce方法
        return data.reduce((pre,now)=>{
            console.log(pre,now)
            return pre+now;
        })
        //第三种 map(map是带返回值的方法，用于数组加工)

        
    }

    /*
        state:组件自身内部可变化的数据
        props:从外部向组件内部进行传参，只读取数据，不修改组件数据
    */
    render(){
        let {name,age,sex} = this.props
        let {isHeight} = this.state
        //三点运算符
        //第一种场景调用传参
        let arr = [1,2,3];
        let result = this.sum1(...arr);
        return(
            <ul>
                <li>姓名:{name}</li>
                <li>年龄:{age}</li>
                <li>性别:{sex}</li>
                <li onClick = {this.clickHandler}>身高很高吗?{isHeight?'是的':'不是'}</li>
                <li>结果:{result}</li>
                {/* ...函数第二种用法接收参数 */}
                <li>结果2:{this.sums(2,3,4)}</li>
            </ul>
        )
    }

}

export default Person;