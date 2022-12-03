
import React from "react"
import classnames from 'classnames';
import cls from './styles.scss';

export type ContainerProps = JSX.IntrinsicElements["div"] & {
    fluid?: boolean;
    children: JSX.Element | JSX.Element[]
};

const Container = ({ children, fluid = false, ...rest }: ContainerProps) => {
    return (
        <div className={classnames(
            cls["container"],
            fluid ? cls["fluid"] : '')}
            {...rest}>
            {children}
        </div>
    )
}

Container.displayName = "Container";

export default Container