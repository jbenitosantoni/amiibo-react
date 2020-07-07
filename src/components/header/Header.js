import React from 'react';
import Flag from 'react-world-flags'

export function Header() {
    return (
        <div>
            <p><a href="?lng=es"><Flag code="es" height="33"/></a> <a href="?lng=en"><Flag code="gb" height="30"/></a>
            </p>
        </div>
    );
}
