const express = require('express');
const cors = require('cors');

// Importa rotas
const authRoutes = require('./routes/auth');
const bookingRoutes = require('./Routes/booking');

// Importa Sequelize e modelos
const sequelize = require('./models/index');
const User = require('./models/User');
const Booking = require('./models/Booking');

const app = express();
app.use(cors());
app.use(express.json());

// Rotas principais
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);

// Sincroniza tabelas com MySQL
sequelize.sync({ alter: true })
  .then(() => console.log('✅ Tabelas sincronizadas com MySQL'))
  .catch(err => console.error('❌ Erro ao sincronizar tabelas:', err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
