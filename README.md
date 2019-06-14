# React Material UI Pagination
React material UI pagination is a react library that depends on [MATERIAL-UI](https://material-ui.com) framework.

![Jun-14-2019 12-48-42](https://user-images.githubusercontent.com/19927903/59500780-d15eae00-8ea2-11e9-8427-2f5e0d03e6df.gif)

## Features
* Supports `rtl`, you need to enable rtl for your theme, check material-ui [documentation](https://material-ui.com/guides/right-to-left/) about this point
* Customizable, since you can change styling, content, used components and number of visible links

## Requirements
This library depends on both react version `^16.8.6` and material-ui `4.0.0`, so please make sure that you have these minimum requirements before you install it.

## Installation
```
npm i react-mui-pagination
```
Then import it where you need to use it
```jsx
import Pagination from 'react-mui-pagination';
```
Then add your first component
```jsx
const [page, setMyPage] = React.useState(1); // this an example using hooks
const setPage = (e, p) => {
  setMyPage(p);
}
return (
    <Pagination page={page} setPage={setPage} total={100} />
);
```
Here you are, your component is ready to use.

### Customization
You have many options to customize links to different views
<img width="561" alt="image" src="https://user-images.githubusercontent.com/19927903/59495599-4b3d6a00-8e98-11e9-9266-b78e9d4d69e5.png">

#### Set number of visible links
```jsx
<Pagination numOfLinks={3} page={page} setPage={setPage} total={424} />
// or you can even hide them 
<Pagination numOfLinks={0} page={page} setPage={setPage} total={424} />
```
#### Hide previous/next buttons or first/last buttons
```jsx
<Pagination hidePrevNext hideFirstLast 
page={page} setPage={setPage} total={424}   />
```

#### Use other material-ui styles
```jsx
<Pagination
  linksShadow={4}
  linksColor='secondary'
  activeLinkColor='default'
  page={page} setPage={setPage} total={424} />

```
#### Use custom components/elements
```jsx
<Pagination
  LinksComponent='a'
  linksProps={{ href: '#page-' + page }}
  activeProps={{ style: { fontWeight: 'bold' } }}
  page={page} setPage={setPage} total={424} />
```
#### Use custom content for buttons
```jsx
// import this from material-ui
import Fab from '@material-ui/core/Fab';
// ...
<Pagination
  firstLastShadow={6}
  firstLastColor={'secondary'}
  FirstLastComponent={Fab} // we have used our imported component
  firstContent='FST'
  lastContent='LST'
  page={page} setPage={setPage} total={424} />

```

### Reference
You can pass many properties to the component:

| Name               | Type                                                | Default     | Description                                                                                                                                                                                                                                                                                            |
|--------------------|-----------------------------------------------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `total` *            | int                                                 |             | The number of total results                                                                                                                                                                                                                                                                            |
| `page`               | int                                                 | 1           | The current active page                                                                                                                                                                                                                                                                                |
| `setPage`            | function                                            |             | to change the page state                                                                                                                                                                                                                                                                               |
| `perPage`            | int                                                 | 10          | How many results each page can has                                                                                                                                                                                                                                                                     |
| `numOfLinks`         | int                                                 | 5           | How many links to be visible                                                                                                                                                                                                                                                                           |
| `hidePrevNext`       | boolean                                             | false       | If `true` previous and next buttons will be hidden                                                                                                                                                                                                                                                     |
| `hideFirstLast`      | boolean                                             | false       | If `true` first and last buttons will be hidden                                                                                                                                                                                                                                                        |
| `linksShadow`        | int                                                 | 0           | The pages' links' shadow                                                                                                                                                                                                                                                                               |
| `linksColor`         | enum: 'default' , 'primary' , 'secondary', 'error'  | 'default'   | The pages' links color, these colors are depending on material-ui colors for [`Fab`](https://material-ui.com/api/fab/) component since you have left the property `LinksComponent` to its default value                                                                                                |
| `activeLinkColor`    | enum: 'default' , 'primary' , 'secondary', 'error'  | 'primary'   | The active pages link color, this color are depending on material-ui colors for [`Fab`](https://material-ui.com/api/fab/) component since you have left the property `LinksComponent` to its default value                                                                                             |
| `LinksComponent`     | elementType                                         | Fab         | The component used for the links' node. Either a string to use a DOM element or a component.                                                                                                                                                                                                           |
| `linksProps`         | object                                              | {}          | Attributes to be applied to links components.                                                                                                                                                                                                                                                          |
| `activeProps`        | object                                              | {}          | Attributes to be applied to active link component.                                                                                                                                                                                                                                                     |
| `prevNextShadow`     | int                                                 | 0           | The previous and next links' shadow                                                                                                                                                                                                                                                                    |
| `prevNextColor`      | enum: 'default' , 'primary' , 'secondary', 'errorÎ' | 'default'   | The previous and next links colors, these colors are depending on material-ui colors for [`IconButton`](https://material-ui.com/api/icon-button/) component since you have left the property `PrevNextComponent` to its default value                                                                   |
| `PrevNextComponent`  | elementType                                         | IconButton  | The component used for the previous and next links' node. Either a string to use a DOM element or a component.                                                                                                                                                                                         |
| `prevNextProps`      | object                                              | {}          | Attributes to be applied to previous and next links components.                                                                                                                                                                                                                                        |
| `nextProps`          | object                                              | {}          | Attributes to be applied to next link component.                                                                                                                                                                                                                                                       |
| `prevProps`          | object                                              | {}          | Attributes to be applied to previous link component.                                                                                                                                                                                                                                                   |
| `prevContent`        | string \| elementType | KeyboardArrowLeft|The content of previous link, note that this default content depends on theme dircetion, so it will be automaticlly set to `KeyboardArrowRight` in `rtl`. to set html elements you cannot use the tag name directly so instead of writing `'b'` you should write `{<b>some text</b>}` |
| `nextContent`        | string  \| elementType | KeyboardArrowRight|The content of next link, note that this default content depends on theme dircetion, so it will be automaticlly set to `KeyboardArrowLeft` in `rtl`. . to set html elements you cannot use the tag name directly so instead of writing `'b'` you should write `{<b>some text</b>}`   |
| `firstLastShadow`    | int                                                 | 0           | The first and last links' shadow                                                                                                                                                                                                                                                                       |
| `firstLastColor`     | enum: 'default' , 'primary' , 'secondary', 'errorÎ' | 'default'   | The first and last liks colors, these colors are depending on material-ui colors for [`IconButton`](https://material-ui.com/api/icon-button/) component since you have left the property `FirstLastComponent` to its default value                                                                     |
| `FirstLastComponent` | elementType                                         | IconButton  | The component used for the first and last links' node. Either a string to use a DOM element or a component.                                                                                                                                                                                            |
| `firstLastProps`     | object                                              | {}          | Attributes to be applied to first and last links' components.                                                                                                                                                                                                                                          |
| `firstProps`         | object                                              | {}          | Attributes to be applied to first link component.                                                                                                                                                                                                                                                      |
| `lastProps`          | object                                              | {}          | Attributes to be applied to last link component.                                                                                                                                                                                                                                                       |
| `firstContent`       | string \| elementType | FirstPageIcon|The content of previous link, note that this default content depends on theme dircetion. to set html elements you cannot use the tag name directly so instead of writing `'b'` you should write `{<b>some text</b>}`                                                                     |
| `lastContent`        | string  \| elementType | LastPageIcon|The content of next link, note that this default content depends on theme dircetion.  . to set html elements you cannot use the tag name directly so instead of writing `'b'` you should write `{<b>some text</b>}`                                                                 |






