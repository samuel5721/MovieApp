import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return <header>
        <h1><Link to={`/`}>영화 목록</Link></h1>
    </header>
}

export default Header;