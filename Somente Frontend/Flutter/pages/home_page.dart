import 'package:flutter/material.dart';
import '../widgets/botao.dart';  
import '../widgets/botao2.dart'; 
import '../widgets/botao3.dart'; 
import '../widgets/botao4.dart';
import '../widgets/botao5.dart';
import '../widgets/botao6.dart';

class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Home')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          Botao2(),
          Botao(),
          Botao3(),
          Botao4(),
          Botao5(),
          Botao6(),
        ],
      ),
    );
  }
}
