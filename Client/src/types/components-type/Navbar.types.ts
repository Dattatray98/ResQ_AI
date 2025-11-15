interface NavbarInter{
    id:number;
    label:string;
    path?:string;
}


export const NavbarTypes :NavbarInter[] = [
    {id: 1, label:'Home',},
    {id: 2, label:"About", path:""},
    {id: 4, label:"Contact", path:"footer"}
]