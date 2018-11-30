import React from 'react'

export default class UserAdd extends React.Component {
  constructor () {
    super ()
    this.state = {
      name: '',
      age: 0,
      gender: ''
    }
  }
  render() {
    const {name, age, gender} = this.state
    return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <label>用户名：</label>
            <input type="text" value={name} onChange={(e) => {this.handleValueChange('name', e.target.value)}}/>
            <br/>
            <label>年龄：</label>
            <input type="number" value={age||''} onChange={(e) => {this.handleValueChange('age', e.target.value, 'number')}}/>
            <br/>
            <label>性别：</label>
            <select value={gender} onChange={(e) => {this.handleValueChange('gender', e.target.value)}}>
              <option value="">请选择</option>
              <option value="male">男</option>
              <option value="female">女</option>
            </select>
            <br/>
            <input type="submit" value="提交"/>
          </form>
        </main>
      </div>
    )
  }

  handleValueChange = (field, value, type="string") => {
    if (type === "number") {
      value = +value
    }

    this.setState({
      [field]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    const {name, age, gender} = this.state
    // 提交表单到后台
    fetch('http://localhost:3000/user', {
      method: 'post',
      // 使用fetch提交的json数据需要使用JSON.stringify转换为字符串
      body: JSON.stringify({
        name,
        age,
        gender
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((res) => {
        // 当添加成功时，返回的json对象中应包含一个有效的id字段
        // 所以可以使用res.id来判断添加是否成功
        if (res.id) {
          alert('添加用户成功')
          this.setState({
            name: '',
            age: 0,
            gender: ''
          })
        } else {
          alert('添加失败')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
