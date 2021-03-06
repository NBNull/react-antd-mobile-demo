/**
 * Created by Administrator on 2017/8/10.
 */
import React, { Component } from 'react'
import { List, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { saveListData } from '../../redux/actions'

import './listItem.less'

const Item = List.Item

class ListItems extends Component {

	// 确认参会
	ensurePart = () => {
		this.props.ensurePart()
	}

	// 取消参会
	cancelPart = () => {
		this.props.cancelPart()
	}

	//签到
	sign = () => {
		this.props.sign()
	}

	// 查看详情
	goDetail = (list) => {
		const { dispatch } = this.props
		dispatch(saveListData(list))
		this.props.history.push(`/customerDetail/${list.id}`)
	}

	render() {
		const list = this.props.list
		const ensureDisplay = this.props.list.check ? 'none': 'inline-block'
		const cancelDisplay = this.props.list.check ? 'inline-block' : 'none'
		return (
			<li className="dataList-list-item" >
				<List>
					<Item arrow="horizontal" onClick={this.goDetail.bind(this, list)}>{list.company}</Item>
				</List>
				<div className="list-info">
					<div className="list-info-left">
						<p>
							<span className="key">客户姓名</span>：
							<span className="value">{list.name}</span>
						</p>
						<p>
							<span className="key">职务</span>：
							<span className="value">{list.position}</span>
						</p>
						<p>
							<span className="key">联络人</span>：
							<span className="value">{list.contact_name}</span>
						</p>
					</div>
					<div className="list-info-right">
						<p>
							<span className="key">住宿酒店</span>：
							<span className="value">{list.field595ca9fd50e25c000108cc0e || '暂无'}</span>
						</p>
						<p>
							<span className="key">住宿方式</span>：
							<span className="value">{list.field59638170f91fdd00017e5528 || '暂无'}</span>
						</p>
						<p>
							<span className="key">房间号</span>：
							<span className="value">{list.room || '暂无'}</span>
						</p>
					</div>
				</div>
				<div className="operator">
					<Button size="small" inline="true" style={{background: '#d71418', color: '#fff', display: ensureDisplay}}  onClick={this.ensurePart}>确定参会</Button>
					<Button size="small" inline="true" style={{background: '#ccc', color: '#fff', display: cancelDisplay}} onClick={this.cancelPart}>取消参会</Button>
					<Button type="primary" size="small" inline="true" onClick={this.sign}>签到</Button>
				</div>
			</li>
		)
	}
}

export default connect()(ListItems)
