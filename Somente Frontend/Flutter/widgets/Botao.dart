import 'package:flutter/material.dart';

class Botao extends StatelessWidget {
  const Botao({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal:20,vertical:12),
        decoration: BoxDecoration(
        color: Colors.blue,
        borderRadius: BorderRadius.circular(8)
        ),
        child: Text('Hello')
    );
  }
}
