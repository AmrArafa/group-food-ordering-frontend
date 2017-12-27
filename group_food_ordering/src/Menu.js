// // import React from 'react';
// // import { Table } from 'reactstrap';

// // export default class Example extends React.Component {
// //   render() {
// //     return (
// //       <Table dark>
// //         <thead>
// //           <tr>
// //             <th>#</th>
// //             <th>Item</th>
// //             <th>Price</th>
// //             <th>Quantity</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           <tr>
// //             <th scope="row">1</th>
// //             <td>Burger</td>
// //             <td>10</td>
// //             <td>0</td>
// //           </tr>
// //           <tr>
// //             <th scope="row">2</th>
// //             <td>Shawerma</td>
// //             <td>15</td>
// //             <td>0</td>
// //           </tr>
// //           <tr>
// //             <th scope="row">3</th>
// //             <td>Falafel</td>
// //             <td>5</td>
// //             <td>0</td>
// //           </tr>
// //         </tbody>
// //       </Table>
// //     );
// //   }
// // }

// import Menu, { SubMenu, Item as MenuItem, Divider } from 'rc-menu';
// import 'rc-menu/assets/index.css';

// export default const commonMenu = (<Menu onSelect={handleSelect} onOpenChange={onOpenChange}>
//   <SubMenu title={<span>sub menu</span>} key="1">
//     <MenuItem key="1-1">0-1</MenuItem>
//     <MenuItem key="1-2">0-2</MenuItem>
//   </SubMenu>
//   {nestSubMenu}
//   <MenuItem key="2">1</MenuItem>
//   <MenuItem key="3">outer</MenuItem>
//   <MenuItem disabled>disabled</MenuItem>
//   <MenuItem key="5">outer3</MenuItem>
// </Menu>);