import 'package:flutter/material.dart';

class Botao3 extends StatelessWidget {
  const Botao3({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal:20,vertical:12),
        decoration: BoxDecoration(
        color: Colors.green,
        borderRadius: BorderRadius.circular(8)
        ),
        child: Text('Hello')
    );
  }
}
