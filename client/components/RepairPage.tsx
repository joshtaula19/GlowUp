import { useLightsWithCategories } from '../apis/api'
import React, { useState, useEffect } from 'react'
import request from 'superagent'
import { Ticket } from '../../models/ticket'

const RepairPage = () => {
  const { data, error, isLoading } = useLightsWithCategories()
  const [selectedLight, setSelectedLight] = useState<number | null>(null)
  const [FormData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
  })

  const [tickets, setTickets] = useState<Ticket[]>([])

  useEffect(() => {
    const getTickets = async () => {
      try {
        const response = await request.get('/api/v1/tickets')
        setTickets(response.body || [])
      } catch (error) {
        console.error('Error fetching tickets:', error)
      }
    }
    getTickets()
  }, [])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try {
      await request.post('/api/v1/tickets').send({
        ...FormData,
        light_id: selectedLight,
      })
      const response = await request.get('/api/v1/tickets')
      setTickets(response.body)
      setFormData({
        name: '',
        email: '',
        description: '',
      })
    } catch (error) {
      console.error('Error submitting ticket:', error)
    }
  }

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  const selectedLightData = data?.find((light) => light.id === selectedLight)

  return (
    <div>
      <h1>Which item needs repairing?</h1>

      <select
        onChange={(e) => setSelectedLight(Number(e.target.value))}
        value={selectedLight ?? ''}
      >
        <option value="">Select an item</option>
        {data?.map((light) => (
          <option key={light.id} value={light.id}>
            {light.name}
          </option>
        ))}
      </select>

      {selectedLightData ? (
        <div>
          <img
            src={selectedLightData.image_url}
            alt={selectedLightData.name}
            style={{ width: '100px', height: 'auto', display: 'block' }}
          />
          <h2>{selectedLightData.name}</h2>
          <p>{selectedLightData.description}</p>
          <p>Status: {selectedLightData.status}</p>
          <p>Price: ${selectedLightData.price.toFixed(2)}</p>
          <p>Category: {selectedLightData.category_name}</p>

          <p>Describe your issue:</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={FormData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={FormData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={FormData.description}
              onChange={handleChange}
              placeholder="Describe the issue"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      ) : (
        <p>Please select a valid item to see its details.</p>
      )}

      <div>
        <h1>Ongoing Tickets:</h1>
        {tickets.map((ticket) => {
          const light = data?.find((name) => name.id === ticket.light_id)
          return (
            <div
              key={ticket.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              {light && (
                <div style={{ display: 'flex', gap: '10px' }}>
                  <img
                    src={light.image_url}
                    alt={light.name}
                    style={{ width: '150px', height: 'auto' }}
                  />
                  <div>
                    <h3>{light.name}</h3>
                    <p>
                      <strong>Name:</strong> {ticket.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {ticket.email}
                    </p>
                    <p>
                      <strong>Description:</strong> {ticket.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RepairPage
