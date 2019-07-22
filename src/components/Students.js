import React, {Component} from 'react';
import { List, AutoSizer } from "react-virtualized";

class Students extends Component{
  constructor() {
    super();
    this.renderRow = this.renderRow.bind(this);
    this.list = require('../data/students.json');
  }
  renderRow = ({index, key, style}) => {
    return (
      <div key={key} style={style} className="row">
        <span className="name">
          <span className='firstname pd-left-10'>{this.list[index].firstname}</span>
          <span className='lastname pd-left-25'>{this.list[index].lastname}</span>
        </span>
        <span className='id pd-left-25 adm' > {this.list[index].id}</span>
        <span className="more-info"><a className="sdt-btn" href="/menu">More Info</a></span>
      </div>
    );
}
  render(){
    return(
      <div className='overlay'>
        <div className='List'>
        <h3 className="lable"> List of all Students</h3>
        <AutoSizer>
          {
            ({ width, height }) => {
              return<List className="actual-list"
                        width={width}
                        height={height}
                        rowHeight={50 }
                        rowRenderer={this.renderRow}
                        rowCount={this.list.length}/>
          }}
          </AutoSizer>
        </div>
      </div>);
  }
}

export default Students;
