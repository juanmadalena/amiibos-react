import React, { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { environment } from "../../environments/environment";
import { AmiiboGallery } from "../../shared/components/AmiiboCallery/AmiiboGallery";
import { AmiibosContext } from "../../shared/contexts/AmiibosContext";
import {AmiiboSearch} from "../../shared/components/AmiiboSearch/AmiiboSearch"


export function Amiibos () {
    // const [amiibos, setAmiibos] = useState([]);

    const [amiibos, setAmiibos] = useContext(AmiibosContext);
    const [filteredAmiibos, setFilteredAmiibos] = useState([])

    useEffect(() => {
        axios.get(environment.url + 'amiibo').then(res => {
            const amiibos = res.data.amiibo.slice(0,20);
            setAmiibos(amiibos);
            setFilteredAmiibos(amiibos);
        })
    }, [] )

    function filterAmiibos (filterValues) {
        let filteredLocalAmiibos = [];
        amiibos.forEach(amiibo => {
            let amiiboIsOk = true;
            for (const key in filterValues) {
                if(filterValues.hasOwnProperty(key)) {
                    const localValue = amiibo[key];
                    const filterValue = filterValues[key];
                    if ( !localValue || (localValue && filterValue && filterValue !== "" && !localValue.toLowerCase().includes(filterValue.toLowerCase())) ) {
                        console.log("hello")
                        amiiboIsOk = false;
                        break;
                    }
                }
            }
            if (amiiboIsOk){
                filteredLocalAmiibos.push(amiibo);
                console.log("AAAAAAAAAAAAAAAAAAAAAAA" + (amiibo))
            }
         } )
        setFilteredAmiibos(filteredLocalAmiibos);
    }
    console.log("AAAAAAAAAAAAAATTTTTTTTTTTTSSSSSSSSSSSS" + (filteredAmiibos))

    return (

        <div>
            <h1 className="b-text-primary d-flex justify-content-center">Amiibos</h1>
            <AmiiboSearch fnSubmit={filterAmiibos}/>
            <AmiiboGallery amiibos={filteredAmiibos}/>
        </div>
    );
}

