import React, { useState } from 'react';

import GroceryToggle from './GroceryToggle';
import VendorToggle from './VendorToggle';

import logo from '../assets/fruits/logo.png';

import orange from '../assets/fruits/3.png';
import cherry from '../assets/fruits/4.png';
import lemon from '../assets/fruits/2.png';
import avocado1 from '../assets/fruits/1.png';
import avocado2 from '../assets/fruits/2.png';
import papaya from '../assets/fruits/1.png';
import pome from '../assets/fruits/2.png';

const groceries = [
  { name: 'Orange', img: orange },
  { name: 'Cherry', img: cherry },
  { name: 'Lemon', img: lemon },
  { name: 'Avocado', img: avocado1 },
  { name: 'Avocado', img: avocado2 },
  { name: 'Papaya', img: papaya },
  { name: 'Pome', img: pome }
];

// Sample list of 100 items (you can replace this with your actual list)
const searchItems = [
  'Blackberry', 'Blackcurrant', 'Blueberry', 'Banana', 'Apple', 'Avocado',
  'Cherry', 'Cucumber', 'Dragonfruit', 'Durian', 'Elderberry', 'Fig', 'Grape',
  'Grapefruit', 'Guava', 'Jackfruit', 'Kiwi', 'Lemon', 'Lime', 'Lychee', 'Mango',
  'Melon', 'Mulberry', 'Nectarine', 'Olive', 'Orange', 'Papaya', 'Peach',
  'Pear', 'Pineapple', 'Plum', 'Pomegranate', 'Raspberry', 'Strawberry', 'Tangerine',
  'Tomato', 'Watermelon', 'Zucchini', 'Shop FreshMart', 'Shop GreenBasket', 
  'Shop DailyVeggie', 'Category Fruits', 'Category Vegetables', 'Category Organic',
  
];

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() === '') {
      setFilteredResults([]);
    } else {
      const matches = searchItems.filter(item =>
        item.toLowerCase().startsWith(term.toLowerCase())
      );
      setFilteredResults(matches.slice(0, 10)); // Limit to top 10 results
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setFilteredResults([]);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#fff', minHeight: '100vh' }}>
      {/* Top bar */}
      <header style={{
        display: 'flex', alignItems: 'center', padding: '10px 30px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)', backgroundColor: 'white'
      }}>
        <img src={logo} alt="Logo" style={{ height: 50 }} />
        <h3 style={{ marginLeft: 20, color: '#555' }}>Search your location</h3>
      </header>

      {/* Search bar */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <div style={{ position: 'relative', width: '75%', maxWidth: 900 }}>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search for fruits, shops or categories..."
            style={{
              width: '100%',
              padding: '20px 50px 20px 50px',
              borderRadius: 15,
              border: '1.5px solid #ccc',
              fontSize: 16,
              outline: 'none',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
              transition: 'border 0.3s ease'
            }}
            onFocus={(e) => (e.target.style.border = '1.5px solid #649B00')}
            onBlur={(e) => (e.target.style.border = '1.5px solid #ccc')}
          />

          {/* Suggestions Dropdown */}
          {filteredResults.length > 0 && (
            <ul style={{
              listStyle: 'none',
              margin: 0,
              padding: 0,
              position: 'absolute',
              top: '100%',
              left: 0,
              width: '100%',
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              borderTop: 'none',
              borderRadius: '0 0 15px 15px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              zIndex: 10,
              maxHeight: 300,
              overflowY: 'auto'
            }}>
              {filteredResults.map((item, index) => (
                <li
                  key={index}
                  onMouseDown={() => handleSuggestionClick(item)}
                  style={{
                    padding: '12px 20px',
                    borderBottom: '1px solid #eee',
                    cursor: 'pointer',
                    fontSize: 15
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
                  onMouseLeave={e => e.currentTarget.style.background = '#fff'}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Toggles */}
      <div style={{
        display: 'flex', justifyContent: 'center', gap: 40,
        marginTop: 40, alignItems: 'center'
      }}>
        <GroceryToggle />
        <VendorToggle />
      </div>

      {/* Popular Groceries */}
      <div style={{ padding: '50px 80px', backgroundColor: '#f9f9f9' }}>
        <h2 style={{
          fontWeight: '700',
          fontSize: 28,
          color: '#333',
          marginBottom: 20,
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}>
          Popular Groceries
        </h2>

        <div style={{
          display: 'flex',
          gap: 30,
          marginTop: 10,
          overflowX: 'auto',
          paddingBottom: 10,
          scrollbarWidth: 'thin',
          scrollbarColor: '#a0a0a0 transparent',
          flexWrap: 'nowrap',
        }}>
          {groceries.map((item, index) => (
            <div
              key={index}
              style={{
                flex: '0 0 auto',
                width: 140,
                backgroundColor: '#fff',
                borderRadius: 15,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                padding: 15,
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }}
            >
              <img
                src={item.img}
                alt={item.name}
                style={{
                  height: 100,
                  width: '100%',
                  objectFit: 'contain',
                  borderRadius: 10,
                  marginBottom: 12,
                  transition: 'transform 0.3s ease',
                }}
              />
              <p style={{
                fontWeight: 600,
                fontSize: 16,
                color: '#444',
                margin: 0,
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                userSelect: 'none',
              }}>
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
