import React, { FunctionComponent, ReactNode } from 'react';
import clsx from 'clsx';
import cls from './styles.scss';

type Columns = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type JustifyContent = 'flex-start' | 'center' | 'space-between' | 'flex-end';
type AlignContent = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
type AlignItems = 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export const Grid: FunctionComponent<{
    children: ReactNode;
    row?: boolean;
    col?: boolean;
    spacing?: Spacing;
    xs?: Columns;
    sm?: Columns;
    md?: Columns;
    lg?: Columns;
    justifyContent?: JustifyContent;
    alignContent?: AlignContent;
    alignItems?: AlignItems;
    direction?: Direction;
    style?: any;
  } & React.HTMLAttributes<HTMLDivElement>> = ({
    children,
    row,
    col,
    spacing,
    xs,
    sm,
    md,
    lg,
    justifyContent,
    alignContent = 'stretch',
    alignItems = 'stretch',
    direction = 'row',
    style,
  }) => {
    const classNames = clsx({
      [cls.Grid__row]: row,
      [cls.Grid__col]: col && !row,
      [cls[`Grid__spacing-${ spacing }`]]: spacing && row,
      [cls[`Grid__xs-${ xs }`]]: xs && !row,
      [cls[`Grid__sm-${ sm }`]]: sm && !row,
      [cls[`Grid__md-${ md }`]]: md && !row,
      [cls[`Grid__lg-${ lg }`]]: lg && !row,
      [cls[`Grid__justifyContent-${ justifyContent }`]]: justifyContent,
      [cls[`Grid__alignContent-${ alignContent }`]]: alignContent,
      [cls[`Grid__alignItems-${ alignItems }`]]: alignItems,
      [cls[`Grid__direction-${ direction }`]]: direction,
    });
  
    return (
      <div className={classNames} style={style}>
        { children }
      </div>
    );
  };