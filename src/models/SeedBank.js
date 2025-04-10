import mongoose from 'mongoose';

const seedBankSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
}, { timestamps: true });

// El nombre de la colección será 'seedbanks' (en minúsculas y pluralizado automáticamente por Mongoose)
export default mongoose.model('SeedBank', seedBankSchema);