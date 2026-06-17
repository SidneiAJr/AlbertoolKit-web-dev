import 'package:flutter/material.dart';

class Botao5 extends StatelessWidget {
  const Botao5({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.symmetric(horizontal:20,vertical:12),
        decoration: BoxDecoration(
            color: Colors.grey,
            borderRadius: BorderRadius.circular(8)
        ),
         child: Text('Hello')
    );
  }
}
