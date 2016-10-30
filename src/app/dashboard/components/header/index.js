import React from 'react'
import styles from './theme/styles'
import Hammer from 'react-hammerjs'

export default class extends React.Component {
  render() {
    return <header className={styles.header}>
      <div className={styles.overlay}>
        <h1 className="f1">
          <Hammer onTap={this._handleTapLeft}>
            <div className={styles.left} />
          </Hammer>
          赢球大师
          <Hammer onTap={this._handleTapRight}>
            <div className={styles.right} />
          </Hammer>
        </h1>
      </div>
      <div className={styles.logo} />
      <a className={styles.download} href="#" />
    </header>
  }

  _handleTapLeft() {
    console.log('tap left')
  }

  _handleTapRight() {
    console.log('tap right')
  }
}
