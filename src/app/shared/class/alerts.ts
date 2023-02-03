import Swal, { SweetAlertIcon } from 'sweetalert2';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root',
})
export class Alerts {

    constructor() { }


    /**
     * Alerta sencilla para mostrar al usuario cuaquier mensaje
     * @param icon
     * @param title
     * @param text
     * @param footer
     * @returns
     */
    public callAlert(
        icon: SweetAlertIcon,
        title: string,
        text: string,
        footer?: string
    ): any {
        return Swal.fire({
            icon,
            title,
            text,
            confirmButtonColor: '#BD020A',
            footer,
            allowOutsideClick: false,
        });
    }

    /**
     * Alerta con confimacion para mostrar al usuario con una respuesta
     * @param title
     * @param text
     * @param funcion
     * @param width
     * @param icon
     */
    public callAlertWithFunction(
        title: string,
        text: string,
        funcion?: () => void,
        width: string = '60%',
        icon: SweetAlertIcon = 'success'
    ): any {
        Swal.fire({
            title,
            text,
            icon,
            width,
            confirmButtonColor: '#BD020A',
            confirmButtonText: 'Continuar',
            allowOutsideClick: false,
        }).then((result) => {
            if (result.isConfirmed) {
                // funcion();
            }
        });
    }


    public callAlertConfirmation(
        title: string,
        text: string,
        icon: SweetAlertIcon,
        confirmButtonText: string,
        cancelButtonText: string
    ): any {
        return Swal.fire({
            title,
            text,
            icon,
            showCancelButton: true,
            confirmButtonColor: '#BD020A',
            cancelButtonColor: '#606060 ',
            cancelButtonText,
            confirmButtonText,
        });
    }
}
