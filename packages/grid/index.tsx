
import React from "react"
import classnames from 'classnames';
import cls from './styles.scss';

export type Props = JSX.IntrinsicElements["div"] & {
    children?: React.ReactNode;
};

const Layout = ({ children, ...rest }: Props) => {
    return (
        <div className={classnames(
            cls["layout__1__2__1"])}
            {...rest}>
            {children}
        </div>
    )
}
const Header = ({ children, ...rest }: Props) => {
    return (
        <div className={classnames(
            cls["layout__1__2__1__header"])}
            {...rest}>
            {children}
        </div>
    )
}

const Content = ({ children, ...rest }: Props) => {
    return (
        <div className={classnames(
            cls["layout__1__2__1__content"])}
            {...rest}>
            {children}
        </div>
    )
}

const Footer = ({ children, ...rest }: Props) => {
    return (
        <div className={classnames(
            cls["layout__1__2__1__footer"])}
            {...rest}>
            {children}
        </div>
    )
}

Layout.displayName = "Layout";
Header.displayName = "Header";
Content.displayName = "Content";
Footer.displayName = "Footer";

export { Layout, Header, Content, Footer }