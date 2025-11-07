interface NavbarInter{
    id:number;
    label:string;
    path?:string;
}


export const NavbarTypes :NavbarInter[] = [
    {id: 1, label:'Home', path:"/dashboard"},
    {id: 2, label:"About"},
    {id: 3, label:"Service"},
    {id: 4, label:"Contact"}
]