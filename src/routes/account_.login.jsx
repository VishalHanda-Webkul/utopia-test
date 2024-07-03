import * as React from 'react'
import { Link } from '@remix-run/react'
import { Title } from '/src/title.js'
import { Card } from '/src/card.js'
import { activities } from '/public/data.js'
import { CategoryFilters } from '/src/category-filters.js'
import '/public/globals.css'

export default function Index() {
  return (
    <div
      className='my-class'
      style={{
        width: '100%',
        height: '100%',
        background: 'var(--off-white)',
        zIndex: '100',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px 0px 25px',
        gap: 5,
        boxShadow: '0px 2px 33px var(--yellow)',
        transition: 'all 3s ease-out',
      }}
    >
      <Title
        title='BBeffore I Go'
        style={{
          width: 1068,
          height: 159,
          position: 'absolute',
          left: 186,
          top: 601,
          opacity: '12%',
        }}
      />
      <div
        style={{
          background: '#dd4a76',
          width: 667,
          height: 80,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
          contain: 'layout',
          position: 'absolute',
          left: -38,
          top: 658,
          backgroundColor: 'rgba(236, 229, 179, 0)',
        }}
      >
        <Link
          style={{
            wordBreak: 'break-word',
            color: 'var(--off-white)',
            contain: 'layout',
            width: 'max-content',
            height: 'max-content',
            fontWeight: 700,
            fontFamily: 'var(--secondary)',
            fontSize: '28px',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}
          to='/posts'
        >
          Things I want to do
        </Link>
      </div>
      <Link
        style={{
          wordBreak: 'break-word',
          color: 'var(--off-white)',
          contain: 'layout',
          fontWeight: 700,
          fontFamily: 'var(--secondary)',
          fontSize: '28px',
          textTransform: 'uppercase',
          textAlign: 'center',
          width: 528,
          height: 385,
          position: 'absolute',
          left: 69,
          top: 12,
        }}
        to='/posts'
      >
        Things I want to do
      </Link>
      <div
        style={{
          backgroundColor: '#aaaaaa33',
          width: 648,
          height: 674,
          contain: 'layout',
          position: 'absolute',
          left: 72,
          top: 36,
          color: 'rgb(180, 39, 39, 1)',
          border: '10px solid rgb(201, 55, 55, 1)',
        }}
      >
        <span
          style={{
            position: 'absolute',
            wordBreak: 'break-word',
            left: 211,
            top: 196,
            width: 93,
            height: 19,
            color: 'rgb(59, 24, 175, 1)',
          }}
        >
          WEBKUL !!
        </span>
        <div
          style={{
            backgroundColor: '#aaaaaa33',
            position: 'absolute',
            left: 86,
            top: 251,
            width: 508,
            height: 774,
            fontSize: '50px',
            color: 'rgb(245, 31, 31, 1)',
          }}
        >
          <span
            style={{
              position: 'absolute',
              wordBreak: 'break-word',
              left: 87,
              top: 264,
              width: 346,
              height: 418,
            }}
          >
            niodadaijdlsjldjasljdlaskjdlasldjlasjlkdlkasjddddddddd
          </span>
        </div>
      </div>
    </div>
  )
}
