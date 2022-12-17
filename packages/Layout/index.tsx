
import React from "react"
import classnames from 'classnames';
import clsx from 'clsx';
import cls from './styles.scss';
import { Grid } from "./grid";

export type Props = JSX.IntrinsicElements["div"] & {
    children?: React.ReactNode;
    className?: string;
    justifyContent?: 'flex-start' | 'center' | 'space-between' | 'flex-end';
    alignContent?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    alignItems?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

const Layout = ({ children, className, ...rest }: Props) => {
    return (
        <div className={classnames(
            cls[`layout`], className)}
            {...rest}>
            {children}
        </div>
    )
}
const Header = ({ children, justifyContent, alignContent = 'stretch', alignItems = 'stretch', direction = 'row', ...rest }: Props) => {
    const classNames = clsx({
        [cls[`header__justifyContent-${justifyContent}`]]: justifyContent,
        [cls[`header__alignContent-${alignContent}`]]: alignContent,
        [cls[`header__alignItems-${alignItems}`]]: alignItems,
        [cls[`header__direction-${direction}`]]: direction,
    });

    return (
        <div className={classnames(
            cls[`layout__header`], cls[`header`], classNames)}
            {...rest}>
            {children}
        </div>
    )
}

const SideBar = ({ children, justifyContent, alignContent = 'stretch', alignItems = 'stretch', direction = 'row', ...rest }: Props) => {
    const classNames = clsx({
        [cls[`sidebar__justifyContent-${justifyContent}`]]: justifyContent,
        [cls[`sidebar__alignContent-${alignContent}`]]: alignContent,
        [cls[`sidebar__alignItems-${alignItems}`]]: alignItems,
        [cls[`sidebar__direction-${direction}`]]: direction,
    });

    return (
        <div className={classnames(
            cls[`layout__sidebar`], cls[`sidebar`], classNames)}
            {...rest}>
            {children}
        </div>
    )
}

const Content = ({ children, justifyContent, alignContent = 'stretch', alignItems = 'stretch', direction = 'row', ...rest }: Props) => {
    const classNames = clsx({
        [cls[`content__justifyContent-${justifyContent}`]]: justifyContent,
        [cls[`content__alignContent-${alignContent}`]]: alignContent,
        [cls[`content__alignItems-${alignItems}`]]: alignItems,
        [cls[`content__direction-${direction}`]]: direction,
    });
    return (
        <div className={classnames(
            cls[`layout__content`], cls[`content`], classNames)}
            {...rest}>
            {children}
        </div>
    )
}

const Footer = ({ children, justifyContent, alignContent = 'stretch', alignItems = 'stretch', direction = 'row', ...rest }: Props) => {
    const classNames = clsx({
        [cls[`footer__justifyContent-${justifyContent}`]]: justifyContent,
        [cls[`footer__alignContent-${alignContent}`]]: alignContent,
        [cls[`footer__alignItems-${alignItems}`]]: alignItems,
        [cls[`footer__direction-${direction}`]]: direction,
    });
    return (
        <div className={classnames(
            cls[`layout__footer`], cls[`footer`], classNames)}
            {...rest}>
            {children}
        </div>
    )
}

Layout.displayName = "Layout";
Header.displayName = "Header";
SideBar.displayName = "SideBar";
Content.displayName = "Content";
Footer.displayName = "Footer";

export { Layout, Header, Content, Footer, SideBar, Grid }