import classes from './Loading.module.css'

const Loading = () => {
  return <div className={`${classes.section} ${classes["section-center"]}`}>
    <div className={classes.loading}></div>
  </div>
}

export default Loading
