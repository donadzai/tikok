import classNames from "classnames/bind";
import { useState } from "react";
import { forwardRef } from "react";

import styles from './Image.module.scss'
import images from "../../assets/images";

const cx = classNames.bind(styles);

function Image({src, alt, className, customDefaultImage = images.defaultImage}, ref) {
    const [fallback, setFullback] = useState('')
    const handleImage = () => {
        return setFullback(customDefaultImage)
    }
    const classes = cx('wrapper', {
        [className] : className,
    })

    return <img ref={ref} className={classes} src={fallback || src} alt={alt} onError={handleImage}/>
}

export default forwardRef(Image);