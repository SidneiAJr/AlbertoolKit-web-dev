import 'package:flutter/material.dart';

class Botao4 extends StatelessWidget {
  const Botao4({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal:20,vertical:12),
        decoration: BoxDecoration(
        color: Colors.yellow,
        borderRadius: BorderRadius.circular(8)
        ),
        child: Text('Hello')
    );
  }
}
