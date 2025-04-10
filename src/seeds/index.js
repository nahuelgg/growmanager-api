import mongoose from 'mongoose';
import { seedUsers } from './users.seed.js';
import { seedSeeds } from './seeds.seed.js';

const runSeeds = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/growmanager', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Running seeds...');
    await seedUsers();
    await seedSeeds();
    
    console.log('All seeds completed successfully');
  } catch (error) {
    console.error('Error running seeds:', error);
  } finally {
    await mongoose.connection.close();
  }
};

runSeeds();
